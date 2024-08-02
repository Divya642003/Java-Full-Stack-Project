package com.project.lawyer_app.service.Impl;

import com.project.lawyer_app.dto.LawyerDto;
import com.project.lawyer_app.entity.Lawyer;
import com.project.lawyer_app.exception.ResourceNotFoundException;
import com.project.lawyer_app.mapper.LawyerMapper;
import com.project.lawyer_app.repositories.LawyerRepository;
import com.project.lawyer_app.service.LawyerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class LawyerServiceImpl implements LawyerService {


    private LawyerRepository lawyerRepository;
    @Override
    public LawyerDto createLawyer(LawyerDto lawyerDto) {
        Lawyer lawyer = LawyerMapper.mapToLawyer(lawyerDto);
        Lawyer savedLawyer = lawyerRepository.save(lawyer);
        return LawyerMapper.mapToLawyerDto(savedLawyer);
    }

    @Override
    public LawyerDto getLawyerById(long id) {
        Lawyer lawyer = lawyerRepository.findById(id)
                .orElseThrow(
                        ()->new ResourceNotFoundException("Lawyer not exists with the given id : " + id));
        return LawyerMapper.mapToLawyerDto(lawyer);
    }

    @Override
    public List<LawyerDto> getAllLawyers() {
        List<Lawyer> lawyers = lawyerRepository.findAll();
        return lawyers.stream().map(lawyer -> LawyerMapper.mapToLawyerDto(lawyer)).collect(Collectors.toList());
    }

    @Override
    public LawyerDto updateLawyer(Long lawyerId, LawyerDto updatedLawyer) {
        Lawyer lawyer= lawyerRepository.findById(lawyerId).orElseThrow(
                ()->new ResourceNotFoundException("Lawyer not exists with the given id : " + lawyerId));
        lawyer.setName(updatedLawyer.getName());
        lawyer.setEmail(updatedLawyer.getEmail());
        lawyer.setAddress(updatedLawyer.getAddress());
        lawyer.setPhone(updatedLawyer.getPhone());
        lawyer.setType(updatedLawyer.getType());

       Lawyer lawyerUpdated = lawyerRepository.save(lawyer);
        return LawyerMapper.mapToLawyerDto(lawyerUpdated);
    }

    @Override
    public void deleteLawyer(long id) {

        Lawyer lawyerDelete = lawyerRepository.findById(id).orElseThrow(
                ()->new ResourceNotFoundException("Lawyer not exists with the given id : " + id));
        lawyerRepository.delete(lawyerDelete);
    }

}
