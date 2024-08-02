package com.project.lawyer_app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.lawyer_app.entity.Lawyer;

public interface LawyerRepository extends JpaRepository<Lawyer, Long> {
}
