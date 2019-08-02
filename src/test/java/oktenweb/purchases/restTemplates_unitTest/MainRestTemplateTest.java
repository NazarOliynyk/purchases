package oktenweb.purchases.restTemplates_unitTest;

import oktenweb.purchases.models.CurrencyType;
import oktenweb.purchases.models.Purchase;
import oktenweb.purchases.restTemplates.MainRestTemplate;
import org.junit.*;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class MainRestTemplateTest {
    private MainRestTemplate mainRestTemplate;

    @BeforeClass
    public static void beforeClass() {
        System.out.println("Before Test");
    }

    @AfterClass
    public  static void afterClass() {
        System.out.println("After Test");
    }

    @Before
    public void initTest() {
        mainRestTemplate = new MainRestTemplate();
        System.out.println("Class created");
    }

    @After
    public void afterTest() {
        mainRestTemplate = null;
        System.out.println("Class nullified");
    }

    @Test
    public void read() throws ParseException, IOException {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        Purchase purchase = Purchase.builder().
                date(sdf.parse("2019-05-20")).
                currency(CurrencyType.UAH).build();

        float uah = (float) mainRestTemplate.read(purchase, CurrencyType.UAH);
        float eur = (float) mainRestTemplate.read(purchase, CurrencyType.EUR);
        float usd = (float) mainRestTemplate.read(purchase, CurrencyType.USD);
        float pln = (float) mainRestTemplate.read(purchase, CurrencyType.PLN);

        // assert cross change rated
        Assert.assertEquals(1.0f, uah, 0.00001f);
        Assert.assertEquals(0.033981912107823246f, eur, 0.00001f);
        Assert.assertEquals(0.03794063495882412f, usd, 0.00001f);
        Assert.assertEquals(0.14632376878435147f, pln, 0.00001f);
    }
}