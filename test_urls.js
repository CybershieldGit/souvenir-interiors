const urls = [
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618219973347-19aa82a2015e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-149736216548-37526070297c?auto=format&fit=crop&w=800&q=80"
];

async function checkUrls() {
    for (const url of urls) {
        try {
            const res = await fetch(url, { method: 'HEAD' });
            console.log(url, res.status);
        } catch(e) {
            console.log(url, 'Error');
        }
    }
}
checkUrls();
