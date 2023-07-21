<?php

namespace App\Entity;

use App\Repository\SensorsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SensorsRepository::class)]
class Sensors
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?int $value = null;

    #[ORM\Column(nullable: true)]
    private ?int $margin = null;

    #[ORM\Column]
    private ?bool $short_lived = false;

    #[ORM\ManyToMany(targetEntity: Plannings::class, mappedBy: 'sensor_id')]
    private Collection $plannings;

    #[ORM\ManyToMany(targetEntity: Rooms::class, inversedBy: 'sensors')]
    private Collection $room_id;

    #[ORM\ManyToMany(targetEntity: SensorTypes::class, inversedBy: 'sensors')]
    private Collection $type_id;

    public function __construct()
    {
        $this->planning = new ArrayCollection();
        $this->room_id = new ArrayCollection();
        $this->type_id = new ArrayCollection();
    }
    
    public function getId(): ?int
    {
        return $this->id;
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

    public function getValue(): ?int
    {
        return $this->value;
    }

    public function setValue(int $value): static
    {
        $this->value = $value;

        return $this;
    }

    public function getMargin(): ?int
    {
        return $this->margin;
    }

    public function setMargin(int $margin): static
    {
        $this->margin = $margin;

        return $this;
    }

    public function isShortLived(): ?bool
    {
        return $this->short_lived;
    }

    public function setShortLived(bool $short_lived): static
    {
        $this->short_lived = $short_lived;

        return $this;
    }

    /**
     * @return Collection<int, Plannings>
     */
    public function getPlannings(): Collection
    {
        return $this->plannings;
    }

    public function addPlannings(Plannings $plannings): static
    {
        if (!$this->plannings->contains($plannings)) {
            $this->plannings->add($plannings);
            $plannings->addSensorId($this);
        }

        return $this;
    }

    public function removePlannings(Plannings $plannings): static
    {
        if ($this->plannings->removeElement($plannings)) {
            $plannings->removeSensorId($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Rooms>
     */
    public function getRoomId(): Collection
    {
        return $this->room_id;
    }

    public function addRoomId(Rooms $roomId): static
    {
        if (!$this->room_id->contains($roomId)) {
            $this->room_id->add($roomId);
        }

        return $this;
    }

    public function removeRoomId(Rooms $roomId): static
    {
        $this->room_id->removeElement($roomId);

        return $this;
    }

    /**
     * @return Collection<int, SensorTypes>
     */
    public function getTypeId(): Collection
    {
        return $this->type_id;
    }

    public function addTypeId(SensorTypes $typeId): static
    {
        if (!$this->type_id->contains($typeId)) {
            $this->type_id->add($typeId);
        }

        return $this;
    }

    public function removeTypeId(SensorTypes $typeId): static
    {
        $this->type_id->removeElement($typeId);

        return $this;
    }
}
