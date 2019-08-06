package oktenweb.purchases.controllers_integrationTest;


import com.jayway.jsonpath.JsonPath;
import oktenweb.purchases.PurchasesApplication;
import oktenweb.purchases.models.CurrencyType;
import oktenweb.purchases.models.Purchase;
import oktenweb.purchases.models.User;
import oktenweb.purchases.services.PurchaseService;
import oktenweb.purchases.services.impl.UserServiceImpl;
import org.hamcrest.Matchers;

        import org.junit.Assert;
        import org.junit.Before;
        import org.junit.Test;
        import org.junit.runner.RunWith;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
        import org.springframework.boot.test.context.SpringBootTest;
        import org.springframework.http.MediaType;
        import org.springframework.security.crypto.password.PasswordEncoder;
        import org.springframework.test.context.TestPropertySource;
        import org.springframework.test.context.junit4.SpringRunner;
        import org.springframework.test.web.servlet.MockMvc;
        import org.springframework.test.web.servlet.MvcResult;
        import org.springframework.test.web.servlet.ResultActions;
        import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
        import java.text.SimpleDateFormat;
        import static org.hamcrest.Matchers.is;
        import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
        import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
        import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
        import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
        import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
// webEnvironment = SpringBootTest.WebEnvironment.MOCK,
        classes = PurchasesApplication.class
)
@AutoConfigureMockMvc
@TestPropertySource(
        locations = "classpath:applicationTest.properties") // the database H2
public class MainRestControllerTest {

    @Autowired
    MockMvc mockMvc;

//    private MockMvc mockMvc;
//
//    @InjectMocks
//    private MainRestController mainRestController;
//
//    @Before
//    public void init() throws Exception{
//        MockitoAnnotations.initMocks(this);
//        mockMvc = MockMvcBuilders.standaloneSetup(mainRestController)
//                .build();
//    }

    @Autowired
    private UserServiceImpl userServiceImpl;

    @Autowired
    private PurchaseService purchaseService;

    private String token = "";
    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Before
    public void setUp() throws Exception{

        Assert.assertNotNull(userServiceImpl);

//setting up a User to get the token to get permission for all the other tests
        User nazar = new User();
        nazar.setUsername("Nazar");
        nazar.setPassword("Nazar");

        userServiceImpl.saveUser(nazar);

        ResultActions resultActions=  mockMvc.perform(post("/login")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{ \"username\": \"Nazar\", \"password\": \"Nazar\" }")
                .accept(MediaType.APPLICATION_JSON)
        );

        MvcResult result = resultActions.andReturn();
        token = result.getResponse().getHeader("Authorization");
    }

    @Test
    public void saveUser() throws Exception {

        mockMvc.perform(post("/saveUser")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{ \"username\": \"Nazar1\", \"password\": \"Nazar\" }")
                .accept(MediaType.APPLICATION_JSON)
        )
// .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", is("User was saved successfully.")))
                .andExpect(jsonPath("$.*", Matchers.hasSize(3))); // because ResponseTransfer has 3 fields

        // to test if user exists


        mockMvc.perform(post("/saveUser")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{ \"username\": \"Nazar\", \"password\": \"Nazar\" }")
                .accept(MediaType.APPLICATION_JSON)
        )
// .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", is("User with such login already exists!!")))
                .andExpect(jsonPath("$.*", Matchers.hasSize(3))); // because ResponseTransfer has 3 fields

        // to test if a User with name admin is tried to be saved
        mockMvc.perform(post("/saveUser")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{ \"username\": \"admin\", \"password\": \"admin\" }")
                .accept(MediaType.APPLICATION_JSON)
        )
//.andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", is("User with such login already exists!!")))
                .andExpect(jsonPath("$.*", Matchers.hasSize(3))); // because ResponseTransfer has 3 fields

    }

    @Test
    public void deleteUser() throws Exception{

        mockMvc.perform(MockMvcRequestBuilders.delete("/deleteUser/{id}", 1)
                .header("Authorization", token)
                .accept(MediaType.APPLICATION_JSON)
        )
//.andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", is("Account was deleted successfully")))
                .andExpect(jsonPath("$.*", Matchers.hasSize(3)));
    }

    @Test
    public void findAllUsers() throws Exception {

        User yura = new User();
        yura.setUsername("Yura");
        yura.setPassword("yura");

        userServiceImpl.saveUser(yura);

        ResultActions resultActions=  mockMvc.perform(get("/admin/findAllUsers")
                .header("Authorization", token)
                .accept(MediaType.APPLICATION_JSON))
//.andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.*", Matchers.hasSize(3))) // size of ResponseTransfer content
                .andExpect(jsonPath("$[1].username", is("Nazar")))
                .andExpect(jsonPath("$[2].username", is("Yura")))
                .andExpect(jsonPath("$[1].id", is(3)));

        MvcResult result = resultActions.andReturn();
        String body = result.getResponse().getContentAsString();
        Object dataObject = JsonPath.parse(body).read("$[2].password");
        String passwordEncoded = dataObject.toString();

        Assert.assertTrue(passwordEncoder.matches("yura", passwordEncoded));
    }

    @Test
    public void savePurchase() throws Exception{

        mockMvc.perform(post("/savePurchase/{id}", 1)
                        .header("Authorization", token)
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
//.content("{ \"name\": \"beer\", \"price\": \"5000.0\" , \"currency\": \"USD\"}")
                        .content("{ \"name\": \"beer\", " +
                                "\"price\": \"5000.0\" , " +
                                "\"date\": \"2019-04-29\" ," +
                                "\"currency\": \"USD\"}")
                        .accept(MediaType.APPLICATION_JSON)
        )
// .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", Matchers.is("Purchase was saved successfully")))
                .andExpect(jsonPath("$.*", Matchers.hasSize(3)));

    }

    @Test
    public void getPurchases() throws Exception{

        Purchase p1 = Purchase.builder().
                name("p1").
                price(100.00).
                date(sdf.parse("2019-05-20")).
                currency(CurrencyType.UAH).build();

        purchaseService.savePurchase(2, p1);

        Purchase p2 = Purchase.builder().
                name("p2").
                price(100.00).
                date(sdf.parse("2019-04-04")).
                currency(CurrencyType.EUR).build();

        purchaseService.savePurchase(2, p2);

        //ResultActions resultActions=
                mockMvc.perform(get("/getPurchases/{id}", 2)
                .header("Authorization", token)
                .accept(MediaType.APPLICATION_JSON)
        )
                //.andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", is("p2")))
                .andExpect(jsonPath("$[1].name", is("p1"))) // purchases are sorted by date!!!
                .andExpect(jsonPath("$[0].currency", is("EUR")))
                .andExpect(jsonPath("$[1].currency", is("UAH")))
                .andExpect(jsonPath("$.*", Matchers.hasSize(2)));

//        MvcResult result = resultActions.andReturn();
//        String body = result.getResponse().getContentAsString();
//        Object dataObject = JsonPath.parse(body).read("$[1].date");
//        String date = dataObject.toString();
//        System.out.println("date: "+date);
//        System.out.println(sdf.parse("2019-04-04"));
    }

    @Test
    public void deleteById() throws Exception{

        mockMvc.perform(post("/deleteByDate/{id}", 2)
                .header("Authorization", token)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{ \"text\": \"Nazar\", \"date\": \"2019-04-03T21:00:00.000+0000\" }")
                .accept(MediaType.APPLICATION_JSON)
        )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", Matchers.is("There were deleted: 1 purchases")))
                .andExpect(jsonPath("$.*", Matchers.hasSize(3)));

        mockMvc.perform(post("/deleteByDate/{id}", 2)
                .header("Authorization", token)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content("{ \"text\": \"Nazar\", \"date\": \"2010-04-03T21:00:00.000+0000\" }")
                .accept(MediaType.APPLICATION_JSON)
        )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", Matchers.is("No purchases of this date!")))
                .andExpect(jsonPath("$.*", Matchers.hasSize(3)));

    }

}

