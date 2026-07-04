function WhyChoose() {
  const features = [
    {
      title: "🚚 Fast Delivery",
      desc: "Get your orders delivered quickly across India."
    },
    {
      title: "💳 Secure Payments",
      desc: "100% safe and secure online payment options."
    },
    {
      title: "⭐ Premium Quality",
      desc: "Only trusted and high-quality products."
    }
  ];

  return (
    <section className="why-choose">
      <h2>Why Choose ShopSphere?</h2>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;