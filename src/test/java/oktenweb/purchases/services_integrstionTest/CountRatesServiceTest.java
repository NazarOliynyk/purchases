package oktenweb.purchases.services_integrstionTest;

import oktenweb.purchases.dao.PurchaseDAO;
import oktenweb.purchases.models.CurrencyType;
import oktenweb.purchases.models.Purchase;
import oktenweb.purchases.services.CountRatesService;
import org.junit.*;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CountRatesServiceTest {

    @Autowired
    private CountRatesService countRatesService;

    @MockBean
    private PurchaseDAO purchaseDAO;

    @BeforeClass
    public static void beforeClass() {
        System.out.println("Before Test");
    }

    @AfterClass
    public  static void afterClass() {
        System.out.println("After Test");
    }

    @Before
    public void initTest() throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Purchase p1 = Purchase.builder().
                price(100.00).
                date(sdf.parse("2019-05-20")).
                currency(CurrencyType.UAH).build();
        Purchase p2 = Purchase.builder().
                price(100.00).
                date(sdf.parse("2019-04-04")).
                currency(CurrencyType.EUR).build();
        Purchase p3 = Purchase.builder().
                price(100.00).
                date(sdf.parse("2019-03-23")).
                currency(CurrencyType.USD).build();
        Purchase p4 = Purchase.builder().
                price(100.00).
                date(sdf.parse("2019-02-15")).
                currency(CurrencyType.PLN).build();
        List<Purchase> purchaseList = Arrays.asList(p1, p2, p3, p4);

        when(purchaseDAO.findAllByUserId(1)).thenReturn(purchaseList);

    }

    @After
    public void afterTest() {
        countRatesService = null;
        System.out.println("Class nullified");
    }


    @Test
    public void count()  {

        Assert.assertEquals(6544.88f,
                (float) countRatesService.count("2019", 1,
                CurrencyType.UAH), 0.00001f);

        Assert.assertEquals(214.83f,
                (float) countRatesService.count("2019", 1, CurrencyType.EUR),
                0.00001f);

        Assert.assertEquals(242.34f,
                (float) countRatesService.count("2019", 1, CurrencyType.USD),
                0.00001f);

        Assert.assertEquals(924.19f,
                (float) countRatesService.count("2019", 1, CurrencyType.PLN),
                0.00001f);

        Assert.assertEquals(0,
                (float) countRatesService.count("2009", 1, CurrencyType.PLN),
                0.00001f);

        verify(purchaseDAO, times(5)).findAllByUserId(1);
        verifyNoMoreInteractions(purchaseDAO);
    }
}