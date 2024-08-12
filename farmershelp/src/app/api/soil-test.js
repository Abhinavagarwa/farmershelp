export default function handler(req, res) {
    if (req.method === 'POST') {
      const { pH, nitrogen, phosphorus, potassium, organicMatter } = req.body;
  
      let suggestions = [];
  
      if (pH < 6) {
        suggestions.push('Increase soil pH by adding lime.');
      } else if (pH > 7.5) {
        suggestions.push('Lower soil pH by adding sulfur or organic matter.');
      }
  
      if (nitrogen < 20) {
        suggestions.push('Apply nitrogen-rich fertilizers such as urea or ammonium nitrate.');
      }
  
      if (phosphorus < 30) {
        suggestions.push('Apply phosphorus fertilizers like superphosphate.');
      }
  
      if (potassium < 40) {
        suggestions.push('Apply potassium-rich fertilizers like potassium sulfate.');
      }
  
      if (organicMatter < 2) {
        suggestions.push('Incorporate compost or organic matter into the soil.');
      }
  
      res.status(200).json({
        message: 'Soil Test Results',
        suggestions: suggestions.length > 0 ? suggestions : ['Your soil is in good condition.'],
      });
    } else {
      res.status(405).json({ message: 'Only POST requests are allowed' });
    }
  }
  