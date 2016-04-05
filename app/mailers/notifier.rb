class Notifier < ActionMailer::Base
  default from: "jamesbumbalough.com"

  def support_notification(sender)
  	@sender = sender
  	mail(:to => "james.bumbalough@gmail.com",
  		 :from => sender.email,
  		 :subject => "New Website Email" )
  end
end