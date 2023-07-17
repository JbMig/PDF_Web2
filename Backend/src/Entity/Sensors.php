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


    #[ORM\ManyToOne(inversedBy: 'sensor_id')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Plannings $plannings_id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Rooms $room_id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?SensorTypes $type_id = null;

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
    
    public function getPlanningsId(): ?Plannings
    {
        return $this->plannings_id;
    }

    public function setPlanningsId(?Plannings $plannings_id): static
    {
        $this->plannings_id = $plannings_id;

        return $this;
    }

    public function getRoomId(): ?Rooms
    {
        return $this->room_id;
    }

    public function setRoomId(Rooms $room_id): static
    {
        $this->room_id = $room_id;

        return $this;
    }

    public function getTypeId(): ?SensorTypes
    {
        return $this->type_id;
    }

    public function setTypeId(SensorTypes $type_id): static
    {
        $this->type_id = $type_id;

        return $this;
    }

}
