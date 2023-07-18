<?php

namespace App\Entity;

use App\Repository\PlanningsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanningsRepository::class)]
class Plannings
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column()]
    private ?\DateTimeImmutable $starts_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $ends_at = null;

    #[ORM\Column]
    private ?int $target_value = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Sensors $sensor_id = null;

    public function __construct()
    {
        $this->sensor_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStartsAt(): ?\DateTimeImmutable
    {
        return $this->starts_at;
    }

    public function setStartsAt(\DateTimeImmutable $starts_at): static
    {
        $this->starts_at = $starts_at;

        return $this;
    }

    public function getEndsAt(): ?\DateTimeImmutable
    {
        return $this->ends_at;
    }

    public function setEndsAt(\DateTimeImmutable $ends_at): static
    {
        $this->ends_at = $ends_at;

        return $this;
    }

    public function getTargetValue(): ?int
    {
        return $this->target_value;
    }

    public function setTargetValue(int $target_value): static
    {
        $this->target_value = $target_value;

        return $this;
    }

    public function getSensorId(): ?Sensors
    {
        return $this->sensor_id;
    }

    public function setSensorId(Sensors $sensor_id): static
    {
        $this->sensor_id = $sensor_id;

        return $this;
    }
}
