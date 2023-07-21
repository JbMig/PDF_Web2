<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/user', name: 'show')]
    public function index(EntityManagerInterface $entityManager, Security $security): Response
    {
        $user = $security->getUser();
        if($user){
            $data = [
                'user' => $user,
                'response' => 'success'
            ];
            return new JsonResponse($data);
        }
        else{
            return new JsonResponse([
                'response' => 'error'
            ]);
        }
    }
    #[Route('/user/new', name: 'add_user')]
    public function new(EntityManagerInterface $entityManager, Security $security): Response
    {
        $user = $security->getUser();
        if($user){
            $data = [
                'user' => $user,
                'response' => 'success'
            ];
            return new JsonResponse($data);
        }
        else{
            return new JsonResponse([
                'response' => 'error'
            ]);
        }
    }
}
