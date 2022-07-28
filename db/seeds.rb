# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do
    c = Customer.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        company: Faker::Company.name,
        customer_cat: Faker::Company.industry,
        phone: Faker::PhoneNumber.phone_number,
        mobile: Faker::PhoneNumber.cell_phone,
        fax: Faker::PhoneNumber.phone_number,
        website: Faker::Internet.domain_name,
        street: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state,
        zip: Faker::Address.zip_code,
        country: 'United States',
    )
end

15.times do
    inv = Invoice.create(
        customer_id: Faker::Number.between(from: 1, to:10),
        terms: 30,
        invoice_date: Faker::Date.backward(days: 30),
        summary: Faker::Lorem.paragraph(sentence_count: 3),
        tax: 6.35,
    )
end

50.times do
    itm = Item.create(
        invoice_id: Faker::Number.between(from: 1, to: 15),
        name: Faker::Commerce.product_name,
        price: Faker::Commerce.price,
        qty: Faker::Number.non_zero_digit,
        description: Faker::Lorem.sentence,
        service_date: Faker::Date.in_date_period,
        category: Faker::Commerce.department,
    )
end

5.times do
    pmt = Payment.create(
        invoice_id: Faker::Number.between(from: 1, to: 15),
        date: Faker::Date.in_date_period,
        amount: Faker::Commerce.price,
    )
end

puts "Customers: #{Customer.all.length}"
puts "Invoices: #{Invoice.all.length}"
puts "Items: #{Item.all.length}"
puts "Payments: #{Payment.all.length}"