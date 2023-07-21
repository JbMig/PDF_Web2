<?php

namespace App\Controller;

use PHPUnit\Util\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SideBarController extends AbstractController
{
    #[Route('/side_bar', name: 'aside_bar')]
    public function index(Security $security): Response
    {
        $user = $security->getUser();
        if($user){
            $user_id = $user->getId();

            $data = [
                'user_id' => $user_id,
                "response" => "success"
            ];
            return new JsonResponse($data);
        }
        else{
            return new JsonResponse([
                "response" => "error"
            ]);
        }
    }
}
