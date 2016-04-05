ActionMailer::Base.delivery_method = :smtp
 
ActionMailer::Base.smtp_settings = {
:enable_starttls_auto => true,
:address => 'smtp.gmail.com',
:port => 587,
:domain => 'JamesBumbalough.com',
:user_name => 'james.bumbalough@gmail.com',
:password => 'fpme gpdl kxts jgai',
:authentication => 'plain'
}