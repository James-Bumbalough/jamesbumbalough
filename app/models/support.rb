class Support 
  include ActiveModel::Validations
 
  validates_presence_of :email, :sender_name, :phone, :content, :antispam
  # to deal with form, you must have an id attribute
  attr_accessor :id, :email, :sender_name, :phone, :content, :antispam
 
  def initialize(attributes = {})
    attributes.each do |key, value|
      self.send("#{key}=", value)
    end
    @attributes = attributes
  end
 
  def read_attribute_for_validation(key)
    @attributes[key]
  end
 
  def to_key
  end
 
  def save
    if self.valid?
      if @attributes[:antispam].upcase == "TRUMP"
        Notifier.support_notification(self).deliver!
        return true
      end
    end
    return false
  end
end