<?php

namespace App\Controller;

use App\Entity\Plannings;
use App\Entity\Sensors;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PlanningController extends AbstractController
{
    #[Route('/planning/{planning_id}', name: 'index')]
    public function index(EntityManagerInterface $entityManager, int $planning_id): Response
    {
        $repository = $entityManager->getRepository(Plannings::class);
        $planning = $repository->find($planning_id);

        $data = [
            'planning' => $planning
        ];

        return new JsonResponse($data);
    }
}
