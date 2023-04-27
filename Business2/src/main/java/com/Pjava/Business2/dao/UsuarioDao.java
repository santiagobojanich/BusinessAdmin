package com.Pjava.Business2.dao;

import com.Pjava.Business2.models.Usuario;

import java.util.List;


public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);
  Usuario verificarCredenciales(Usuario usuario);
}
