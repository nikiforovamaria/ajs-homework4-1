export default function life(data) {
  let result;
  if (data.health > 50) {
    result = 'healthy';
  } else if (data.health <= 50 && data.health > 15) {
    result = 'wounded';
  } else {
    result = 'critical';
  }

  return result;
}
