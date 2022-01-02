<?php
final class Principal
{
    public function sanitizarArrayEntrada($arreglo) 
    {
        foreach ($arreglo as $llave => $valor) 
        {
            if (is_array($valor)) 
            {
                $valor = $this->sanitizarArrayEntrada($valor);
            } else 
            {
                $valor = htmlspecialchars($valor);
            }
            $arreglo[$llave] = $valor;
        }
    
        return $arreglo;
    }    

    
}