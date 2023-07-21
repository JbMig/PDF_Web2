<?php

namespace App\Controller;

use App\Entity\Sensors;
use Doctrine\ORM\EntityManagerInterface;
use http\Env\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RoomController extends AbstractController
{
    #[Route('/room/{room_id}', name: 'show')]
    public function index(EntityManagerInterface $entityManager, int $room_id, Security $security): Response
    {

        $sensor_repository = $entityManager->getRepository(Sensors::class);

        $sensors = $sensor_repository->findBy(array("room_id" => $room_id));
        $data = [
            'sensor' => $sensors,
        ];
        return new JsonResponse($data);
    }

    #[Route('/room{id}/add_sensor', name: 'add_sensor', methods: ['POST'])]
    public function addSensor(EntityManagerInterface $entityManager, int $id): Response
    {
        $sensor_repository = $entityManager->getRepository(Sensors::class);
        $sensors = $sensor_repository->findAll();

        return new JsonResponse([
            'sensors' => $sensors
        ]);
    }

    #[Route('/room{id}/new_sensor', name: 'new_sensor', methods: ['POST'])]
    public function newSensor(EntityManagerInterface $entityManager, int $id,Request $request): Response
    {
        if (isset($formData['sensor_name'])) {
            $sensor_repository = $entityManager->getRepository(Sensors::class);
            $sensor = $sensor_repository->findBy(['name' => $formData['name']]);

            $sensor->setRoomId($sensor->getId());

            $entityManager->persit($sensor);
            $entityManager->flush();
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

    #[Route('/room{id}/delete', name: 'delete_room', methods: ['DELETE'])]
    public function delete(EntityManagerInterface $entityManager, int $id): Response
    {
        $room_repository = $entityManager->getRepository(Rooms::class);
        $room = $room_repository->find($id);

        $entityManager->remove($room);
        $entityManager->flush();
        return new JsonResponse([
            'response' => 'success'
        ]);
    }
}
