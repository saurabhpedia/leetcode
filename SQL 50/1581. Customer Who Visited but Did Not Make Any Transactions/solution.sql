

select 
x.customer_id,
count(x.visit_id) as count_no_trans 
from visits x where x.visit_id 
not in (select y.visit_id from transactions y)
group by x.customer_id