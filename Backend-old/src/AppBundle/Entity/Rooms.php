<?php

namespace App\Entity;

use App\Repository\RoomsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoomsRepository::class)]
class Rooms
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: Buildings::class, inversedBy: 'rooms')]
    private Collection $building_id;

    #[ORM\ManyToMany(targetEntity: Sensors::class, mappedBy: 'room_id')]
    private Collection $sensors;

    #[ORM\ManyToMany(targetEntity: RoomTypes::class, mappedBy: 'room_type_id')]
    private Collection $room_type;

    public function __construct()
    {
        $this->building_id = new ArrayCollection();
        $this->sensors = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Buildings>
     */
    public function getBuildingId(): Collection
    {
        return $this->building_id;
    }

    public function addBuildingId(Buildings $buildingId): static
    {
        if (!$this->building_id->contains($buildingId)) {
            $this->building_id->add($buildingId);
        }

        return $this;
    }

    public function removeBuildingId(Buildings $buildingId): static
    {
        $this->building_id->removeElement($buildingId);

        return $this;
    }

    /**
     * @return Collection<int, Sensors>
     */
    public function getSensors(): Collection
    {
        return $this->sensors;
    }

    public function addSensor(Sensors $sensor): static
    {
        if (!$this->sensors->contains($sensor)) {
            $this->sensors->add($sensor);
            $sensor->addRoomId($this);
        }

        return $this;
    }

    public function removeSensor(Sensors $sensor): static
    {
        if ($this->sensors->removeElement($sensor)) {
            $sensor->removeRoomId($this);
        }

        return $this;
    }

    public function getRoomTypes(): Collection
    {
        return $this->room_type;
    }

    public function addRoomType(RoomTypes $room_type): static
    {
        if (!$this->room_type->contains($room_type)) {
            $this->room_type->add($room_type);
            $room_type->addRoomId($this);
        }

        return $this;
    }

    public function removeRoomType(RoomTypes $room_type): static
    {
        if ($this->room_type->removeElement($room_type)) {
            $room_type->removeRoomId($this);
        }

        return $this;
    }
}
