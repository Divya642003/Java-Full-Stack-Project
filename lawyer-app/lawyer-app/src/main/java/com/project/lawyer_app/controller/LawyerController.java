package com.project.lawyer_app.controller;

import com.project.lawyer_app.dto.LawyerDto;
import com.project.lawyer_app.service.LawyerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Lawyer")
@AllArgsConstructor
@CrossOrigin("*")
public class LawyerController {

    private LawyerService lawyerService;

    @PostMapping
    public ResponseEntity<LawyerDto> createLawyer(@RequestBody LawyerDto lawyerDto) {
        LawyerDto newLawyerDto = lawyerService.createLawyer(lawyerDto);
        return new ResponseEntity<>(newLawyerDto, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<LawyerDto> getLawyerById(@PathVariable Long id) {
        LawyerDto lawyerdto = lawyerService.getLawyerById(id);
        return ResponseEntity.ok(lawyerdto);
    }

    @GetMapping
    public ResponseEntity<List<LawyerDto>> getAllLawyers() {
        List<LawyerDto > lawyerDtoList = lawyerService.getAllLawyers();
        return ResponseEntity.ok(lawyerDtoList);
    }


    @PutMapping("{id}")
    public ResponseEntity<LawyerDto> updateLawyer(@PathVariable("id") Long id, @RequestBody LawyerDto lawyerDto) {
        LawyerDto updatedLawyer = lawyerService.updateLawyer(id, lawyerDto);
        return ResponseEntity.ok(updatedLawyer);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLawyer(@PathVariable Long id) {
        lawyerService.deleteLawyer(id);
        return ResponseEntity.ok("Lawyer deleted successfuly");
    }
}
