<?php

namespace App\Controller;

use App\Entity\Sensors;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SensorController extends AbstractController
{
    #[Route('/sensor/new', name: 'app_sensor')]
    public function new(int $id, EntityManagerInterface $entityManager): Response
    {
        $sensor_repository = $entityManager->getRepository(Sensors::class);

        return new JsonResponse([
            "response" => "success"
        ]);
    }

    #[Route('/sensor/create', name: 'app_sensor')]
    public function create(int $id, EntityManagerInterface $entityManager): Response
    {
        $sensor_repository = $entityManager->getRepository(Sensors::class);

        return new JsonResponse([
            "response" => "success"
        ]);
    }
}
