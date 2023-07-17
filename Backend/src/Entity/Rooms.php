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

    #[ORM\ManyToMany(targetEntity: Sensors::class, mappedBy: 'room_id')]
    private Collection $sensors;

    #[ORM\ManyToMany(targetEntity: RoomTypes::class, mappedBy: 'room_type_id')]
    private Collection $room_type;

    #[ORM\OneToMany(mappedBy: 'room_id', targetEntity: Sensors::class)]
    private Collection $sensors_id;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Buildings $building_id = null;

    public function __construct()
    {
        $this->sensors = new ArrayCollection();
        $this->sensors_id = new ArrayCollection();
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

    /**
     * @return Collection<int, Sensors>
     */
    public function getSensorsId(): Collection
    {
        return $this->sensors_id;
    }

    public function addSensorsId(Sensors $sensorsId): static
    {
        if (!$this->sensors_id->contains($sensorsId)) {
            $this->sensors_id->add($sensorsId);
            $sensorsId->setRoomId($this);
        }

        return $this;
    }

    public function removeSensorsId(Sensors $sensorsId): static
    {
        if ($this->sensors_id->removeElement($sensorsId)) {
            // set the owning side to null (unless already changed)
            if ($sensorsId->getRoomId() === $this) {
                $sensorsId->setRoomId(null);
            }
        }

        return $this;
    }

    public function getBuildingId(): ?Buildings
    {
        return $this->building_id;
    }

    public function setBuildingId(Buildings $building_id): static
    {
        $this->building_id = $building_id;

        return $this;
    }
}
