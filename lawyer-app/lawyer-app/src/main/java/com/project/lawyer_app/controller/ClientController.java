package com.project.lawyer_app.controller;

import com.project.lawyer_app.dto.ClientDto;
import com.project.lawyer_app.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/client")
@AllArgsConstructor
@CrossOrigin("*")
public class ClientController {
    private ClientService clientService;

    @PostMapping
    public ResponseEntity<ClientDto> createClient(@RequestBody ClientDto clientDto) {
        ClientDto savedClientDto = clientService.createClient(clientDto);
        return new ResponseEntity<>(savedClientDto, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ClientDto> getClientById(@PathVariable("id") Long clientId) {
        ClientDto savedClientDto = clientService.getClientById(clientId);
        return ResponseEntity.ok(savedClientDto);
    }

    @GetMapping
    public ResponseEntity<List<ClientDto>> getAllClients() {
        List<ClientDto> listOfClients = clientService.getAllClients();
        return ResponseEntity.ok(listOfClients);
    }

    @PutMapping("{id}")
    public ResponseEntity<ClientDto> updateClient(@PathVariable("id")
                                                       Long clientId ,  @RequestBody ClientDto updatedClientInfo) {
        ClientDto clientDto = clientService.updateClient(clientId,updatedClientInfo);
        return ResponseEntity.ok(clientDto);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteClient(@PathVariable("id") Long clientId) {
        clientService.deleteClient(clientId);
        return ResponseEntity.ok("Client deleted successfully");
    }
}
