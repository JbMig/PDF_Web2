<?php

namespace App\Entity;

use App\Repository\SensorTypesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SensorTypesRepository::class)]
class SensorTypes
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(nullable: true)]
    private ?int $default_value = null;

    #[ORM\Column(nullable: true)]
    private ?int $default_margin = null;

    #[ORM\ManyToMany(targetEntity: Sensors::class, mappedBy: 'type_id')]
    private Collection $sensors;

    #[ORM\ManyToOne(inversedBy: 'type_id')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Sensors $sensors_id = null;

    public function __construct()
    {
        $this->sensors = new ArrayCollection();
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

    public function getDefaultValue(): ?int
    {
        return $this->default_value;
    }

    public function setDefaultValue(?int $default_value): static
    {
        $this->default_value = $default_value;

        return $this;
    }

    public function getDefaultMargin(): ?int
    {
        return $this->default_margin;
    }

    public function setDefaultMargin(?int $default_margin): static
    {
        $this->default_margin = $default_margin;

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
            $sensor->addTypeId($this);
        }

        return $this;
    }

    public function removeSensor(Sensors $sensor): static
    {
        if ($this->sensors->removeElement($sensor)) {
            $sensor->removeTypeId($this);
        }

        return $this;
    }

    public function getSensorsId(): ?Sensors
    {
        return $this->sensors_id;
    }

    public function setSensorsId(?Sensors $sensors_id): static
    {
        $this->sensors_id = $sensors_id;

        return $this;
    }
}
