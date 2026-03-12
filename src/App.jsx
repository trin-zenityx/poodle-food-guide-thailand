import React, { useState, useMemo } from 'react'
import data from './data.json'

const NutritionGuide = () => (
  <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      <span className="text-3xl mr-2">🧬</span> 
      โภชนาการสำหรับพุดเดิ้ลทอย
    </h2>
    
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
        <h3 className="font-bold text-blue-800 mb-2">🥩 โปรตีน (Protein)</h3>
        <p className="text-sm text-blue-700 mb-2">
          <strong>ลูกสุนัข:</strong> 22%+<br/>
          <strong>สุนัขโต:</strong> 18-22%
        </p>
        <p className="text-xs text-blue-600">แหล่งดี: ไก่ ปลาแซลมอน ไก่งวง แกะ</p>
      </div>
      
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl">
        <h3 className="font-bold text-yellow-800 mb-2">🫒 ไขมัน (Fat)</h3>
        <p className="text-sm text-yellow-700 mb-2">
          <strong>แนะนำ:</strong> 10-15%
        </p>
        <p className="text-xs text-yellow-600">สำคัญ: Omega-3 & Omega-6 บำรุงผิวขน</p>
      </div>
      
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
        <h3 className="font-bold text-green-800 mb-2">🔥 พลังงาน (Calories)</h3>
        <p className="text-sm text-green-700 mb-2">
          <strong>ผู้ใหญ่ (2kg):</strong> 250-350 kcal/วัน<br/>
          <strong>สูงอายุ (7+):</strong> ลด 20-30%
        </p>
        <p className="text-xs text-green-600">ใช้ถ้วยตวด อย่าตวงเอาตามใจ</p>
      </div>
    </div>
    
    <h3 className="font-bold text-gray-800 mb-3">⚠️ ปัญหาสุขภาพที่ต้องระวัง</h3>
    <div className="grid md:grid-cols-2 gap-4">
      {data.nutrition_guide.common_health_issues.map((issue, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <h4 className="font-bold text-red-700 mb-2">{issue.issue}</h4>
          <p className="text-sm text-gray-600 mb-1">
            <strong>อาการ:</strong> {issue.symptoms.join(', ')}
          </p>
          <p className="text-sm text-blue-700">
            <strong>แก้ไข:</strong> {issue.solution}
          </p>
        </div>
      ))}
    </div>
    
    <h3 className="font-bold text-gray-800 mt-6 mb-3">🚫 อาหารที่ควรหลีกเลี่ยง</h3>
    <div className="flex flex-wrap gap-2">
      {data.nutrition_guide.foods_to_avoid.map((food, idx) => (
        <span key={idx} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
          {food}
        </span>
      ))}
    </div>
    
    <h3 className="font-bold text-gray-800 mt-6 mb-3">📅 ตารางเปลี่ยนอาหาร (7 วัน)</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">วัน</th>
            <th className="p-2 text-left">อาหารเก่า</th>
            <th className="p-2 text-left">อาหารใหม่</th>
          </tr>
        </thead>
        <tbody>
          {data.nutrition_guide.transition_schedule.map((row, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-2">{row.day}</td>
              <td className="p-2">{row.old_food}</td>
              <td className="p-2">{row.new_food}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

const BrandCard = ({ brand, category }) => {
  const getPriceColor = (price) => {
    const num = parseInt(price)
    if (num < 200) return 'text-green-600'
    if (num < 500) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{brand.name}</h3>
            <p className="text-sm text-gray-500">{brand.subname}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
            <span className="text-yellow-600">⭐</span>
            <span className="text-sm font-bold text-yellow-700 ml-1">{brand.rating}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className={`text-2xl font-bold ${getPriceColor(brand.price_per_kg.split('-')[0])}`}>
            ฿{brand.price_per_kg}
            <span className="text-sm font-normal text-gray-500"> /กก.</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">{brand.price_per_bag}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="bg-blue-50 rounded-lg p-2">
            <p className="text-xs text-blue-600">โปรตีน</p>
            <p className="font-bold text-blue-800">{brand.protein}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-2">
            <p className="text-xs text-yellow-600">ไขมัน</p>
            <p className="font-bold text-yellow-800">{brand.fat}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-2">
            <p className="text-xs text-green-600">ใยอาหาร</p>
            <p className="font-bold text-green-800">{brand.fiber}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">ส่วนผสมหลัก:</p>
          <p className="text-sm text-gray-700">{brand.key_ingredients}</p>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-green-600 font-medium mb-1">👍 ข้อดี:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {brand.pros.slice(0, 2).map((pro, idx) => (
              <li key={idx}>• {pro}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-red-600 font-medium mb-1">👎 ข้อควรระวัง:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {brand.cons.slice(0, 1).map((con, idx) => (
              <li key={idx}>• {con}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-poodle-50 rounded-lg p-3 mb-4">
          <p className="text-xs text-poodle-700 font-medium">
            💡 เหมาะกับ: {brand.best_for}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {brand.availability.map((store, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {store}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const ComparisonTable = ({ brands }) => (
  <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 overflow-x-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      <span className="text-3xl mr-2">📊</span> 
      ตารางเปรียบเทียบราคาและคุณภาพ
    </h2>
    
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 text-left">ยี่ห้อ</th>
          <th className="p-3 text-right">ราคา/กก.</th>
          <th className="p-3 text-center">โปรตีน</th>
          <th className="p-3 text-center">ไขมัน</th>
          <th className="p-3 text-center">⭐ คะแนน</th>
          <th className="p-3 text-left">เหมาะกับ</th>
        </tr>
      </thead>
      <tbody>
        {brands.map((brand, idx) => (
          <tr key={idx} className="border-b hover:bg-gray-50">
            <td className="p-3 font-medium">{brand.name}</td>
            <td className="p-3 text-right">฿{brand.price_per_kg}</td>
            <td className="p-3 text-center">{brand.protein}</td>
            <td className="p-3 text-center">{brand.fat}</td>
            <td className="p-3 text-center">{brand.rating}</td>
            <td className="p-3 text-xs text-gray-600">{brand.best_for}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)

const Recommendations = () => (
  <section className="bg-gradient-to-br from-poodle-500 to-poodle-700 rounded-2xl shadow-lg p-6 mb-8 text-white">
    <h2 className="text-2xl font-bold mb-6 flex items-center">
      <span className="text-3xl mr-2">🏆</span> 
      คำแนะนำของเรา
    </h2>
    
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
        <h3 className="font-bold text-lg mb-2">🥇 ดีที่สุดโดยรวม</h3>
        <p className="text-2xl font-bold">{data.recommendations.best_overall}</p>
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
        <h3 className="font-bold text-lg mb-2">💰 คุ้มค่าที่สุด</h3>
        <p className="text-2xl font-bold">{data.recommendations.best_value}</p>
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
        <h3 className="font-bold text-lg mb-2">🌿 สำหรับสุนัขแพ้อาหาร</h3>
        <p className="text-2xl font-bold">{data.recommendations.best_for_allergies}</p>
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
        <h3 className="font-bold text-lg mb-2">🦴 สำหรับปัญหาข้อสะบ้า</h3>
        <p className="text-2xl font-bold">{data.recommendations.best_for_patellar}</p>
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
        <h3 className="font-bold text-lg mb-2">💵 งบประมาณจำกัด</h3>
        <p className="text-2xl font-bold">{data.recommendations.best_budget}</p>
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
        <h3 className="font-bold text-lg mb-2">🇹🇭 นิยมที่สุดในไทย</h3>
        <p className="text-2xl font-bold">{data.recommendations.most_popular_thailand}</p>
      </div>
    </div>
  </section>
)

function App() {
  const [activeTab, setActiveTab] = useState('all')
  const [sortBy, setSortBy] = useState('price_asc')

  const allBrands = useMemo(() => {
    return data.categories.flatMap(cat => 
      cat.brands.map(brand => ({ ...brand, category: cat.name }))
    )
  }, [])

  const filteredBrands = useMemo(() => {
    let brands = activeTab === 'all' 
      ? allBrands 
      : data.categories.find(c => c.id === activeTab)?.brands || []

    return brands.sort((a, b) => {
      if (sortBy === 'price_asc') {
        return parseInt(a.price_per_kg) - parseInt(b.price_per_kg)
      }
      if (sortBy === 'price_desc') {
        return parseInt(b.price_per_kg) - parseInt(a.price_per_kg)
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating
      }
      if (sortBy === 'protein') {
        return parseInt(b.protein) - parseInt(a.protein)
      }
      return 0
    })
  }, [activeTab, sortBy, allBrands])

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-poodle-600 to-poodle-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-6xl mb-4">🐩</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            คู่มืออาหารสุนัขพุดเดิ้ลทอย
          </h1>
          <p className="text-xl text-poodle-100">
            เปรียบเทียบราคา ส่วนผสม คุณภาพ จากแบรนด์ชั้นนำในประเทศไทย
          </p>
          <p className="text-sm text-poodle-200 mt-2">
            อัปเดตล่าสุด: {data.last_updated}
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Nutrition Guide */}
        <NutritionGuide />

        {/* Recommendations */}
        <Recommendations />

        {/* Comparison Table */}
        <ComparisonTable brands={filteredBrands} />

        {/* Filter & Sort */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-poodle-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ทั้งหมด
              </button>
              {data.categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeTab === cat.id 
                      ? 'bg-poodle-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <option value="price_asc">ราคา: ต่ำ → สูง</option>
              <option value="price_desc">ราคา: สูง → ต่ำ</option>
              <option value="rating">คะแนนรีวิว</option>
              <option value="protein">โปรตีน: สูง → ต่ำ</option>
            </select>
          </div>
        </section>

        {/* Brand Cards */}
        <section className="mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand, idx) => (
              <BrandCard key={idx} brand={brand} category={brand.category} />
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <p className="text-sm text-yellow-800">
            ⚠️ ข้อมูลราคาอ้างอิงจาก Shopee, Lazada และร้านค้าออนไลน์ในประเทศไทย (อัปเดต {data.last_updated}) 
            ราคาอาจมีการเปลี่ยนแปลง กรุณาตรวจสอบกับร้านค้าอีกครั้ง
            ควรปรึกษาสัตวแพทย์ก่อนเปลี่ยนอาหารสุนัข
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 px-4 text-center">
        <p>🐩 คู่มืออาหารสุนัขพุดเดิ้ลทอย © 2025</p>
        <p className="text-sm mt-2">จัดทำด้วยความรักสำหรับเจ้าพุดเดิ้ลตัวน้อยของคุณ 💕</p>
      </footer>
    </div>
  )
}

export default App
