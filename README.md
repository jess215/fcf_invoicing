# Fillmore Country Floral Invoice App

This app was developed for Fillmore Country Floral as an initial tool to help create and track invoices easily. This app will eventually be refactored as part of a larger application for Fillmore Country Floral that will help manage every aspect of the day to day business. That larger scale application can be found on the [FCF Tracking Management GitHub page](https://github.com/jess215/fcf_tracking_management).

## View of all open invoices

- Invoice number is clickable to view invoice
- Show invoice owner or business name
- Show invoice total
- Show invoice status, open/partially paid, closed/paid will not appear on list

## Ability to create new invoice

- Customer
- Terms
- Invoice date will be pre-populated
- Summary, optional, but can list a description of event
- Tax, will be set to default sales tax
- Type, will need to include if it's fresh floral arrangement, plant, gift shop item, or other
- If floral arrangement is selected, will need to include FloraNext order number
- May or may not include Clover order, we may add it into Clover once payment is received, will be based on which workflow makes the most sense for designers

## Ability to track a payment on an invoice

- Button on the show invoice in order to add a payment that has been received
- Once invoice is fully paid, it should close
- Maybe an email with invoice and payments is sent once paid so that tracking can be completed in Clover
