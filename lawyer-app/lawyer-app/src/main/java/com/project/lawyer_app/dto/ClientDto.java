package com.project.lawyer_app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClientDto {
    private int id;
    private String name;
    private String emailId;
    private String phone;
    private String aadharNumber;
    private String address;

}
