package oktenweb.purchases.dao_integrationTest;

import oktenweb.purchases.dao.UserDAO;
import oktenweb.purchases.models.User;
import org.junit.*;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;


@RunWith(SpringRunner.class)
@DataJpaTest
public class UserDAO_Test {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    UserDAO userDAO;

    @BeforeClass
    public static void beforeClass() {
        System.out.println("Before Test");
    }

    @AfterClass
    public  static void afterClass() {
        System.out.println("After Test");
    }

    @Test
    public void findAndDelete(){

        User user1 = new User();
        User user2 = new User();

        List<User> users = Arrays.asList(user1, user2);

        user1.setUsername("nazar");
        user1.setPassword("nazar");
        user2.setUsername("ivan");
        user2.setPassword("ivan");

        // H2 database is used for test purpose
        entityManager.persist(user1);
        entityManager.persist(user2);
        entityManager.flush();

        Assert.assertEquals(userDAO.findByUsername("nazar"), user1);
        Assert.assertEquals(userDAO.findById(2), user2);
        Assert.assertEquals(userDAO.findAll(), users);
        Assert.assertTrue(userDAO.existsByUsername("nazar"));
        Assert.assertEquals(userDAO.findByUsername("ivan").
                getPassword(), user2.getPassword());

        userDAO.delete(user2);
        Assert.assertTrue(!userDAO.existsByUsername("ivan"));
    }

    @After
    public void after(){
        entityManager = null;
        userDAO = null;
    }
}
