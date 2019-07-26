package oktenweb.purchases.services;

import oktenweb.purchases.models.ResponseTransfer;
import oktenweb.purchases.models.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    ResponseTransfer saveUser(User user);

    User findOneById(Integer id);

    List<User> findAll();

    ResponseTransfer deleteById(int id);
}
