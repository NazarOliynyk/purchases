package oktenweb.purchases.services_integrstionTest;

import oktenweb.purchases.dao.PurchaseDAO;
import oktenweb.purchases.models.CurrencyType;
import oktenweb.purchases.models.Purchase;
import oktenweb.purchases.models.ResponseTransfer;
import oktenweb.purchases.models.User;
import oktenweb.purchases.services.PurchaseService;
import oktenweb.purchases.services.impl.UserServiceImpl;
import org.junit.*;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PurchaseServiceTest {

    @Autowired
    private PurchaseService purchaseService;
    @MockBean
    private UserServiceImpl userServiceImpl;
    @MockBean
    private PurchaseDAO purchaseDAO;

    public PurchaseServiceTest() throws ParseException {
    }

    @BeforeClass
    public static void beforeClass() {
        System.out.println("Before Test");
    }

    @AfterClass
    public  static void afterClass() {
        System.out.println("After Test");
    }


    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    private List<Purchase> purchaseList = new ArrayList<>();

    private Purchase p1 = Purchase.builder().
            name("p1").
            price(100.00).
            date(sdf.parse("2019-05-20")).
            currency(CurrencyType.UAH).build();
    private Purchase p2 = Purchase.builder().
            name("p2").
            price(100.00).
            date(sdf.parse("2019-04-04")).
            currency(CurrencyType.EUR).build();
    private Purchase p3 = Purchase.builder().
            name("p3").
            price(100.00).
            date(sdf.parse("2019-04-04")).
            currency(CurrencyType.USD).build();
    private Purchase p4 = Purchase.builder().
            name("p4").
            price(100.00).
            date(sdf.parse("2019-02-15")).
            currency(CurrencyType.PLN).build();

    @Before
    public void initTest()  {
        User user = new User();
        user.setId(1);
        user.setUsername("Nazar");



        purchaseList = Arrays.asList(p1, p2, p3, p4);


        when(userServiceImpl.findOneById(1)).thenReturn(user);
        when(purchaseDAO.findAllByUserId(1)).thenReturn(purchaseList);

    }

    @After
    public void afterTest() {
        purchaseService = null;
        System.out.println("Class nullified");
    }

    @Test
    public void savePurchase() throws ParseException {

        Purchase p5 = Purchase.builder().
        name("p5").
        price(500.00).
        date(sdf.parse("2019-02-01")).
        currency(CurrencyType.PLN).build();

        ResponseTransfer responseTransfer =
                purchaseService.savePurchase(1, p5);

        Assert.assertNotEquals("", responseTransfer.getText());
        Assert.assertEquals("Purchase was saved successfully",
                responseTransfer.getText());

        verify(userServiceImpl, times(1)).findOneById(1);
        verify(purchaseDAO, times(1)).save(p5);
        verifyNoMoreInteractions(userServiceImpl);
        verifyNoMoreInteractions(purchaseDAO);
    }

    @Test
    public void findAllByUserId() {
        List<Purchase> purchases = purchaseService.findAllByUserId(1);

        Assert.assertTrue(!purchases.isEmpty());
        Assert.assertEquals(purchaseList, purchases);
        verify(purchaseDAO, times(1)).findAllByUserId(1);
        verifyNoMoreInteractions(purchaseDAO);
    }

    @Test
    public void deleteAllByUserIdAndDate() throws ParseException {

        Date date1 = sdf.parse("2019-04-04");

        ResponseTransfer responseTransfer1 =
                purchaseService.deleteAllByUserIdAndDate(1, date1);

        Date date2 = sdf.parse("2018-04-04");

        ResponseTransfer responseTransfer2 =
                purchaseService.deleteAllByUserIdAndDate(1, date2);

        Assert.assertNotEquals("", responseTransfer1.getText());
        Assert.assertNotEquals("", responseTransfer2.getText());
        Assert.assertEquals("There were deleted: 2 purchases",
                responseTransfer1.getText());
        Assert.assertEquals("No purchases of this date!",
                responseTransfer2.getText());

        verify(purchaseDAO, times(1)).delete(p2);
        verify(purchaseDAO, times(1)).delete(p3);
//       verifyNoMoreInteractions(purchaseDAO);
    }
}