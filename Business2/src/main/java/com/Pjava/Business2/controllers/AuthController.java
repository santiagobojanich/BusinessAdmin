package com.Pjava.Business2.controllers;

import com.Pjava.Business2.dao.UsuarioDao;
import com.Pjava.Business2.models.Usuario;
import com.Pjava.Business2.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login" , method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario) {

        Usuario userConfirm = usuarioDao.verificarCredenciales(usuario);
       if (userConfirm !=null){

       String tokenJwt = jwtUtil.create(String.valueOf(userConfirm.getId()) , userConfirm.getEmail());

       return tokenJwt;

        };

       return "fail";
    }


}
