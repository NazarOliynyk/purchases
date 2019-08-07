package oktenweb.purchases.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StartUpController {

    @GetMapping("/")
    public String home(){
        return "forward:/index.html";
    }
}
