package com.project.lawyer_app.mapper;

import com.project.lawyer_app.entity.Lawyer;
import com.project.lawyer_app.dto.LawyerDto;


public class LawyerMapper {

    public static LawyerDto mapToLawyerDto(Lawyer lawyer) {
        return new LawyerDto(
                lawyer.getId(),
                lawyer.getName(),
                lawyer.getEmail(),
                lawyer.getAddress(),
                lawyer.getPhone(),
                lawyer.getType()
        );
    }

    public static Lawyer mapToLawyer(LawyerDto lawyerDto) {
        return new Lawyer(
                lawyerDto.getId(),
                lawyerDto.getName(),
                lawyerDto.getEmail(),
                lawyerDto.getAddress(),
                lawyerDto.getPhone(),
                lawyerDto.getType()
        );
    }
}
