<?php

namespace App\Repositories;

use App\Repositories\ServiceInterface;


class InvoiceSerialGenerator implements ServiceInterface 
{
    public function preg_replace($ref, $stringSL){
        $string = preg_replace("/[^0-9\.]/", '', $ref);
       return  $stringSL . sprintf('%d', $string+1);
    }
}
