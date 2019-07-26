package oktenweb.purchases.services;

import oktenweb.purchases.dao.PurchaseDAO;
import oktenweb.purchases.models.CurrencyType;
import oktenweb.purchases.models.Purchase;
import oktenweb.purchases.restTemplates.MainRestTemplate;
import org.decimal4j.util.DoubleRounder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CountRatesService {

    @Autowired
    PurchaseDAO purchaseDAO;
    @Autowired
    MainRestTemplate mainRestTemplate;

    private double sum;

    private double getRate(Purchase purchase, CurrencyType currency){

        double rate = 0;
        try {
            rate= mainRestTemplate.read(purchase, currency);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return rate;
    }

    private boolean yearEquals(String year, Purchase purchase){
        String yearFromDate =
                String.valueOf(purchase.getDate().toInstant()).substring(0, 4);
        return yearFromDate.equals(year);
    }

    public double count(String year, int id, CurrencyType currency) {
        sum = 0;
        List<Purchase> purchases = purchaseDAO.findAllByUserId(id);

        List<Purchase> purchasesOfYear = purchases.stream()
                .filter(p -> yearEquals(year, p))
                .collect(Collectors.toList());
        if (purchasesOfYear.isEmpty()) {
            return 0;

        } else {
            purchasesOfYear.forEach(purchase -> {
                double priceUAH = purchase.getPrice() * getRate(purchase, currency);
                sum += priceUAH;
            });

            return DoubleRounder.round(sum, 2);
        }
    }
}
