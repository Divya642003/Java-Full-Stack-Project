package com.project.lawyer_app.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.autoconfigure.web.WebProperties;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
            private String name;

   @Column(name="email-id")
    private String emailId;

    @Column(name="Mobile-Number")
    private String phone;

    @Column(name="Aadhar-Number")
    private String aadharNumber;

    @Column(name="Address")
    private String address;

}
