package oktenweb.purchases.services;

import oktenweb.purchases.dao.PurchaseDAO;
import oktenweb.purchases.models.Purchase;
import oktenweb.purchases.models.ResponseTransfer;
import oktenweb.purchases.models.User;
import oktenweb.purchases.services.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class PurchaseService {

    private final PurchaseDAO purchaseDAO;

    private final UserServiceImpl userServiceImpl;

    @Autowired
    public PurchaseService(PurchaseDAO purchaseDAO, UserServiceImpl userServiceImpl) {
        this.purchaseDAO = purchaseDAO;
        this.userServiceImpl = userServiceImpl;
    }


    public ResponseTransfer<String> savePurchase(int id, Purchase purchase){

        User user = userServiceImpl.findOneById(id);
        purchase.setUser(user);
        purchaseDAO.save(purchase);
        return new ResponseTransfer<>("Purchase was saved successfully");
    }

    public List<Purchase> findAllByUserId(int id){
        List<Purchase> purchases = purchaseDAO.findAllByUserId(id);
        Collections.sort(purchases);
        return purchases;
    }

    public ResponseTransfer<String> deleteAllByUserIdAndDate(int id, Date date){

        AtomicInteger counter = new AtomicInteger();
        List<Purchase> purchases = purchaseDAO.findAllByUserId(id);
        purchases.forEach(purchase -> {
            if (purchase.getDate().compareTo(date) == 0){
                counter.getAndIncrement();
                purchaseDAO.delete(purchase);
            }
        });

        if(counter.intValue()>0){
            return new ResponseTransfer<>(
                    "There were deleted: "+counter.intValue()+" purchases");
        }else {
            return new ResponseTransfer<>("No purchases of this date!");
        }

    }
}
