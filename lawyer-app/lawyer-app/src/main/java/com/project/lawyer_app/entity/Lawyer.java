package com.project.lawyer_app.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Lawyer")
public class Lawyer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;
    @Column(name ="email")
    private String email;

    @Column(name = "address")
    private String address;
    @Column(name="phone")
    private String phone;
    @Column(name="Lawyer Type")
    private String type;
}
