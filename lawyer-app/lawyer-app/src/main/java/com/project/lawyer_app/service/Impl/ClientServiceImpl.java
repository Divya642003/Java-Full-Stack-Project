package com.project.lawyer_app.service.Impl;

import com.project.lawyer_app.dto.ClientDto;
import com.project.lawyer_app.exception.ResourceNotFoundException;
import com.project.lawyer_app.mapper.ClientMapper;
import com.project.lawyer_app.repositories.ClientRepository;
import com.project.lawyer_app.service.ClientService;
import com.project.lawyer_app.entity.Client;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ClientServiceImpl implements ClientService {

    private ClientRepository clientRepository;

    @Override
    public ClientDto createClient(ClientDto clientDto) {

        Client client = ClientMapper.mapToClient(clientDto);
        Client savedClient = clientRepository.save(client);

        return ClientMapper.mapToClientDto(savedClient);
    }

    @Override
    public ClientDto getClientById(Long clientId) {
       Client client = clientRepository.findById(clientId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Client not exists with the given id : " + clientId));
        return ClientMapper.mapToClientDto(client);
    }

    @Override
    public List<ClientDto> getAllClients() {
        List<Client> clientList = clientRepository.findAll();
        return clientList.stream().map((client)->ClientMapper.mapToClientDto(client))
                .collect(Collectors.toList());
    }

    @Override
    public ClientDto updateClient(Long clientId, ClientDto updatedClient) {

         Client client = clientRepository.findById(clientId).
                 orElseThrow(
                         ()-> new ResourceNotFoundException("Client do not exists with id : "+ clientId));

         client.setName(updatedClient.getName());
         client.setEmailId(updatedClient.getEmailId());
         Client clientObj = clientRepository.save(client);
        return ClientMapper.mapToClientDto(clientObj);
    }

    @Override
    public void deleteClient(Long clientId) {

        Client removeClient = clientRepository.findById(clientId).
                orElseThrow(
                        ()-> new ResourceNotFoundException("Client do not exists with id : "+ clientId));
        clientRepository.delete(removeClient);

    }


}
