package com.project.lawyer_app.mapper;

import com.project.lawyer_app.dto.ClientDto;
import com.project.lawyer_app.entity.Client;

public class ClientMapper {

    public static ClientDto mapToClientDto(Client client) {
        return new ClientDto(
                client.getId(),
                client.getName(),
                client.getEmailId(),
                client.getPhone(),
                client.getAadharNumber(),
                client.getAddress()
        );
    }
    public static Client mapToClient(ClientDto clientDto) {
        return new Client(
                clientDto.getId(),
                clientDto.getName(),
                clientDto.getEmailId(),
                clientDto.getPhone(),
                clientDto.getAadharNumber(),
                clientDto.getAddress()
        );
    }
}
