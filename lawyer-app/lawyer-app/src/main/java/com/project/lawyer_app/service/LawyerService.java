package com.project.lawyer_app.service;

import com.project.lawyer_app.dto.LawyerDto;

import java.util.List;

public interface LawyerService {

    LawyerDto createLawyer(LawyerDto lawyerDto);
    LawyerDto getLawyerById(long id);
    List<LawyerDto> getAllLawyers();
    LawyerDto updateLawyer(Long lawyerId , LawyerDto updatedLawyer);
    void deleteLawyer(long id);
}
