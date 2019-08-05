package oktenweb.purchases.dao_integrationTest;

import oktenweb.purchases.dao.PurchaseDAO;
import oktenweb.purchases.dao.UserDAO;
import oktenweb.purchases.models.CurrencyType;
import oktenweb.purchases.models.Purchase;
import oktenweb.purchases.models.User;
import org.junit.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
public class PurchaseDAO_Test {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private PurchaseDAO purchaseDAO;

    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    @BeforeClass
    public static void beforeClass() {
        System.out.println("Before Test");
    }

    @AfterClass
    public  static void afterClass() {
        System.out.println("After Test");
    }

    @Test
    public void testFindAndDelete() throws ParseException {

        User user1 = new User();
        user1.setUsername("nazar");

        User user2 = new User();
        user2.setUsername("ivan");

        // H2 database is used for test purpose
        entityManager.persist(user1);
        entityManager.persist(user2);
        entityManager.flush();

        Purchase p1 = Purchase.builder().
                name("p1").
                price(100.00).
                date(sdf.parse("2019-05-20")).
                currency(CurrencyType.UAH).build();

        Purchase p2 = Purchase.builder().
                name("p2").
                price(100.00).
                date(sdf.parse("2019-04-04")).
                currency(CurrencyType.EUR).build();

        Purchase p3 = Purchase.builder().
                name("p3").
                price(100.00).
                date(sdf.parse("2019-04-04")).
                currency(CurrencyType.USD).build();

        Purchase p4 = Purchase.builder().
                name("p4").
                price(100.00).
                date(sdf.parse("2019-02-15")).
                currency(CurrencyType.PLN).build();

        p1.setUser(user1);
        p2.setUser(user1);
        p3.setUser(user2);
        p4.setUser(user2);

        List<Purchase> purchases = Arrays.asList(p1, p2, p3, p4);
        List<Purchase> purchasesUser1 = Arrays.asList(p1, p2);

        entityManager.persist(p1);
        entityManager.persist(p2);
        entityManager.persist(p3);
        entityManager.persist(p4);
        entityManager.flush();

        Assert.assertEquals(p3, purchaseDAO.findById(3));
        Assert.assertEquals(purchasesUser1, purchaseDAO.findAllByUserId(1));
        Assert.assertEquals(purchases, purchaseDAO.findAll());

        purchaseDAO.delete(p3);
        Assert.assertNull(purchaseDAO.findById(3));
        Assert.assertNotNull(purchaseDAO.findById(4));

        userDAO.delete(user2);
        Assert.assertNull(userDAO.findById(2));

    }

    @After
    public void after(){
        entityManager = null;
        userDAO = null;
        purchaseDAO = null;
    }
}