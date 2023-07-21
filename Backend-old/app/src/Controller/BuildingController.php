<?php

namespace App\Controller;

use App\Entity\Buildings;
use App\Entity\Rooms;
use App\Entity\RoomTypes;
use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class BuildingController extends AbstractController
{
    #[Route('/building', name: 'index')]
    public function index(EntityManagerInterface $entityManager, Security $security): Response
    {
        $repository = $entityManager->getRepository(Buildings::class);
        $user = $security->getUser();
        if ($user) {
            $user_id = $user->getId();
            $buildings = $repository->findBY(array('user_id' => $user_id));

            $data = [
                'buildings' => $buildings,
                'user' => $user,
                'response' => "success"
            ];
            return new JsonResponse($data);
        } else {
            return new JsonResponse([
                "response" => "error"
            ]);
        }
    }

    #[Route('/building/{id}', name: 'show')]
    public function show(EntityManagerInterface $entityManager, Security $security, int $id): Response
    {
        $user = $security->getUser();
        if ($user) {
            $building_repository = $entityManager->getRepository(Buildings::class);
            $room_repository = $entityManager->getRepository(Rooms::class);
            $building = $building_repository->find($id);
            $rooms = $room_repository->findBy(array('building_id' => $building));

            $data = [
                'user' => $user,
                'building' => $building,
                'rooms' => $rooms,
                "response" => "success"
            ];

            return new JsonResponse($data);
        } else {
            return new JsonResponse([
                "response" => "error"
            ]);
        }
    }

    #[Route('/building/new', name: 'new_building')]
    public function new(EntityManagerInterface $entityManager, Security $security): Response
    {
        // $user = $security->getUser();
        // if ($user) {
            $building_type = ["logement", "lieux de travail"];
            return new JsonResponse([
                'building_type' => $building_type,
                'response' => 'success'
            ]);
    // }
        // else{
            //return new JsonResponse([
              //  'response' => 'error'
            //]);
        // }
    }

    #[Route('/building/create', name: 'create_building', methods: ['POST'])]
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $formData = json_decode($request->getContent(), true);
        $building = new Buildings();

        if (isset($formData['name']) || isset($formData['address']) || isset($formData['type'])) {
            $building->setName($formData['name']);
            $building->setAddress($formData['address']);
            $building->setType($formData['type']);


            $entityManager->persist($building);
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

    #[Route('/building/{id}/edit', name: 'edit_building')]
    public function edit(EntityManagerInterface $entityManager, Security $security, int $id): Response
    {
        $user = $security->getUser();
        if ($user) {
            $building_repository = $entityManager->getRepository(Buildings::class);
            $room_repository = $entityManager->getRepository(Rooms::class);
            $building = $building_repository->find($id);
            $rooms = $room_repository->findBy(array('building_id' => $building));

            $data = [
                'user' => $user,
                'building' => $building,
                'rooms' => $rooms,
                "response" => "success"
            ];

            return new JsonResponse($data);
        } else {
            return new JsonResponse([
                "response" => "error"
            ]);
        }
    }

    #[Route('/building/{id}/update', name: 'update_building', methods: ['POST'])]
    public function update(EntityManagerInterface $entityManager, Request $request, int $id): Response
    {
        $formData = json_decode($request->getContent(), true);
        $building_repository = $entityManager->getRepository(Buildings::class);
        $building = $building_repository->find($id);

        $building->setName($formData['name']);
        $building->setAddress($formData['address']);
        $building->setType($formData['type']);

        $entityManager->persist($building);
        $entityManager->flush();
        return new JsonResponse([
            'response' => 'success'
        ]);
    }

    #[Route('/building/{id}/delete', name: 'delete_building', methods: ['DELETE'])]
    public function delete(EntityManagerInterface $entityManager, int $id): Response
    {
        $building_repository = $entityManager->getRepository(Buildings::class);
        $building = $building_repository->find($id);

        $entityManager->remove($building);
        $entityManager->flush();
        return new JsonResponse([
            'response' => 'success'
        ]);
    }

    #[Route('/building/{id}/create_room', name: 'create_room', methods: ['POST'])]
    public function createRoom(EntityManagerInterface $entityManager, int $id): Response
    {
        $building_repository = $entityManager->getRepository(Buildings::class);
        $building = $building_repository->find($id);
        $room_type_repository = $entityManager->getRepository(RoomTypes::class);
        $room_types = $room_type_repository->findAll();

        return new JsonResponse([
            'building'=>$building,
            'room_types' => $room_types,
            'response' => 'success'
        ]);
    }

    #[Route('/building/{id}/new_room', name: 'new_room', methods: ['POST'])]
    public function newRoom(EntityManagerInterface $entityManager, int $id, Request $request): Response
    {
        $formData = json_decode($request->getContent(), true);
        $room = new Rooms();

        if (isset($formData['name']) || isset($formData['type'])) {
            $room->setName($formData['name']);
            $room->setType($formData['type']);
            $room->setBuilldingId($id);

            $entityManager->persist($room);
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
}
