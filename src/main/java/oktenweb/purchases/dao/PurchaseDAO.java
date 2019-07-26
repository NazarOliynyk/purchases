package oktenweb.purchases.dao;

import oktenweb.purchases.models.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface PurchaseDAO extends JpaRepository<Purchase, Integer> {

    List<Purchase> findAllByUserId(int id);

}
