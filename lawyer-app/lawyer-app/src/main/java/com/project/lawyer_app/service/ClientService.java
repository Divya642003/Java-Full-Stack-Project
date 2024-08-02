package com.project.lawyer_app.service;
import com.project.lawyer_app.dto.ClientDto;

import java.util.List;

public interface ClientService {
    ClientDto createClient(ClientDto clientDto);

    ClientDto getClientById(Long clientId);

   List<ClientDto> getAllClients();

   ClientDto updateClient(Long clientId, ClientDto updatedClient);

   void deleteClient(Long clientId);

}
