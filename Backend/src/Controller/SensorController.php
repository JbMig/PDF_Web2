<?php

namespace App\Controller;

use App\Entity\Rooms;
use App\Entity\Sensors;
use App\Entity\SensorTypes;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SensorController extends AbstractController
{
    #[Route('/sensor/new', name: 'new_sensor')]
    public function new(EntityManagerInterface $entityManager, Security $security): Response
    {
        $user = $security->getUser();
        if ($user) {
            return new JsonResponse([
                'response' => 'success'
            ]);
        }
        else{
            return new JsonResponse([
                'response' => 'error'
            ]);
        }
    }

    #[Route('/sensor/create', name: 'create_sensor', methods: ['POST'])]
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $formData = json_decode($request->getContent(), true);
        $sensor_type = new SensorTypes();

        if (isset($formData['name'])) {

            $sensor_type->setName($formData['name']);
            $sensor_type->setDefaultValue($formData['value']);
            $sensor_type->setDefaultMargin($formData['margin']);

            $entityManager->persist($sensor_type);
            $entityManager->flush();
            return new JsonResponse([
                'response' => 'success'
            ]);
        } else {
            return new JsonResponse([
                'response' => 'error'
            ]);
        }

    }

    #[Route('/sensor/{id}/edit', name: 'edit_sensor')]
    public function edit(EntityManagerInterface $entityManager, Security $security,int $id): Response
    {
        $user = $security->getUser();
        $sensorRepository = $entityManager->getRepository(SensorTypes::class);
        $sensor = $sensorRepository->find($id);
        if ($user) {
            return new JsonResponse([
                'snesor' => $sensor,
                'response' => 'success'
            ]);
        }
        else{
            return new JsonResponse([
                'response' => 'error'
            ]);
        }
    }

    #[Route('/sensor/{id}/update', name: 'create_sensor', methods: ['POST'])]
    public function update(EntityManagerInterface $entityManager, Request $request, int $id): Response
    {
        $formData = json_decode($request->getContent(), true);
        $sensor_repository = $entityManager->getRepository(SensorTypes::class);
        $sensor_type = $sensor_repository->find($id);


        if (isset($formData['name'])) {
            $sensor_type->setName($formData['name']);
            $sensor_type->setDefaultValue($formData['value']);
            $sensor_type->setDefaultMargin($formData['margin']);

            $entityManager->persist($sensor_type);
            $entityManager->flush();
            return new JsonResponse([
                'response' => 'success'
            ]);
        } else {
            return new JsonResponse([
                'response' => 'error'
            ]);
        }

    }

    #[Route('/sensor/{id}/delete', name: 'delete_room', methods: ['DELETE'])]
    public function delete(EntityManagerInterface $entityManager, int $id): Response
    {
        $sensor_repository = $entityManager->getRepository(SensorTypes::class);
        $sensor = $sensor_repository->find($id);

        $entityManager->remove($sensor);
        $entityManager->flush();
        return new JsonResponse([
            'response' => 'success'
        ]);
    }
}
