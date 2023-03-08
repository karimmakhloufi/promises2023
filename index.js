const getBurger = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve("Voici votre burger");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("Rupture de stock");
    }, 1000);
  }
});

const start = async () => {
  try {
    const response = await getBurger;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

start();
