package com.Pjava.Business2.controllers;

import com.Pjava.Business2.dao.UsuarioDao;
import com.Pjava.Business2.models.Usuario;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UsuariosControllerTest {
@InjectMocks
private UsuarioController controller;
@Mock
private UsuarioDao dao ;
@Test
public void getUsers() {

   Usuario user = new Usuario();
   user.setNombre("Santiago");
   user.setApellido("bojanich");
   user.setEmail("sanasdioajsd@paijd");
   user.setId(1L);
   user.setPassword("asdasd");


    List<Usuario> listmock = new ArrayList<>();
    listmock.add(user);

    when(dao.getUsuarios()).thenReturn(listmock);

    List<Usuario> result = controller.getUsuarios("");

  verify(dao, times(1)).getUsuarios();

}



}
