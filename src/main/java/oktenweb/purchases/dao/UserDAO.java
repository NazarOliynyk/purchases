package oktenweb.purchases.dao;

import oktenweb.purchases.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User, Integer> {

    User findByUsername(String username);
    boolean existsByUsername(String username);

}
